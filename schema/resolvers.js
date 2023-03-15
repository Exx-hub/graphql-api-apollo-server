const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    users: () => {
      // const users =  await User.find() - if using database
      // return users

      return UserList;
    },
    user: (parent, args, contextValue, info) => {
      const { id } = args;
      return UserList.find((user) => user.id === Number(id));
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args, contextValue, info) => {
      console.log({ parent, args, contextValue, info });
      const { title } = args;
      return MovieList.find((movie) => movie.title === title);
    },
  },
  // this is like adding info to fetched user or users. but not unique to that user...
  User: {
    favoriteMovies: () => {
      return MovieList.filter((movie) => movie.year >= 2000);
    },
  },
  Mutation: {
    createUser: (parent, args, contextValue, info) => {
      const { name, username, age, nationality } = args.userInput;
      // nationality is defaulted to BRAZIL if you do not include

      //   console.log({ name, username, age, nationality });
      const lastId = UserList[UserList.length - 1].id;

      const newUser = {
        id: Number(lastId) + 1,
        name,
        username,
        age,
        nationality,
      };

      UserList.push(newUser);

      return newUser;
    },
    updateUsername: (parent, args) => {
      const { id, username } = args.updateInput;

      console.log({ id, username });

      const user = UserList.find((user) => user.id === Number(id));

      console.log(user);
      user.username = username;

      return user;
    },
    deleteUser: (parent, args) => {
      const { id } = args.id;

      UserList = UserList.filter((user) => user.id === Number(id));

      return true;
    },
  },
};

module.exports = { resolvers };
