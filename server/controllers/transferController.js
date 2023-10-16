import { Transfers } from "../models/users.js";
import { Users } from "../models/users.js";

export const getAllTransactions = async (req, res) => {
  try {
    const allTransactions = await Transfers.find({})
      .populate("sender")
      .populate("receiver")
      .sort("-createdAt")
      .exec();

    if (!allTransactions) {
      return res.status(200).send({
        status: true,
        message: "No transactions yet...",
      });
    }

    res.status(200).send({
      status: true,
      message: "All Transactions",
      transactions: allTransactions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Error while getting all transactions",
    });
  }
};

export const handleFundTransfer = async (req, res) => {
  const { sender, receiver, amount } = req.body;
  try {
    const senderUser = await Users.findOne({ _id: sender });
    const receiverUser = await Users.findOne({ _id: receiver });

    if (!senderUser || !receiverUser) {
      return res.status(404).json({ error: "Sender or receiver not found" });
    }

    if (senderUser === receiverUser) {
      return res
        .status(404)
        .json({ error: "Sender or receiver must be different" });
    }

    if (senderUser.balance < amount) {
      return res.status(400).json({ error: "Insufficient funds" });
    }

    senderUser.balance -= amount;
    receiverUser.balance += amount;

    await senderUser.save();
    await receiverUser.save();

    const newTransaction = await Transfers.create({ sender, receiver, amount });
    res.status(201).send({
      status: true,
      message: "Fund Transfer Successful",
      newTransaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Error while Fund Transfer",
    });
  }
};
