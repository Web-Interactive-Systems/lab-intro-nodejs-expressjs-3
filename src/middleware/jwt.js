import jwt from "jsonwebtoken";

const authMidware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Todo
  // given that we are using a Bearer authorization
  // with a token that encoded using jwt (with a secrete key)
  // complete the this middleware to
  // 1. verify if there is a Bearer authorization in the header
  // 2. get the token from `authHeader`
  // 3. decode the token using jwt.verify (with a secrete key)
  // 4. place the jwt
  // 5. handles the potential errors
};

export default authMidware;
