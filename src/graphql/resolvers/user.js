const { UserModel } = require('../../models');

module.exports = {
  Query: {
    getUser: async (parent, args) => {
      try {
        const user = await UserModel.findOne({ _id: args.id });
        if (user) return user;
      } catch (error) {
        console.log(error.message);
      }
    },

    getUsers: async () => {
      try {
        const user = await UserModel.find();
        if (user) return user;
      } catch (error) {
        console.log(error.message);
      }
    },
  },

  Mutation: {
    createUser: async (parent, args, req) => {
      try {
        const { name, email, password } = args;
        const user = new UserModel({
          name,
          email,
          password,
        });
        const posts = await PostModel.findMany({ author: 'jskdhfksldf' });
        await user.save();
        if (user) return user;
      } catch (error) {
        console.log(error.message);
      }
    },

    updateUser: async (parent, args) => {
      try {
        const { id, name, email, password } = args;
        const user = await UserModel.findOneAndUpdate(
          { _id: id },
          { name, email, password },
          { new: true }
        );
        if (user) return user;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
