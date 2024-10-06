module.exports = {
  SUCCESS: {
    isSuccess: true,
    status: 200,
    message: "Success!",
  },
  CREATE: {
    isSuccess: true,
    status: 201,
    message: "Data create!",
  },
  ACCEPTED: {
    isSuccess: true,
    status: 201,
    message: "Accepted!",
  },
  //FAIL CLIENT
  BAD_REQUEST: {
    isSuccess: false,
    status: 400,
    message: "Bad request!",
  },
  UNAUTHORIZED: {
    isSuccess: false,
    status: 401,
    message: "Authorized!",
  },
  FORBIDDEN: {
    isSuccess: false,
    status: 403,
    message: "Forbidden!",
  },
  NOT_FOUND: {
    isSuccess: false,
    status: 404,
    message: "Not found!",
  },
  REQUEST_TIMEOUT: {
    isSuccess: false,
    status: 408,
    message: "Request timeout!",
  },
  REQUEST_CONFLICT: {
    isSuccess: false,
    status: 409,
    message: "Request conflict!",
  },
  //ERROR SERVER
  INTERNAL_SERVER_ERROR: {
    isSuccess: false,
    status: 500,
    message: "Internal Server Error!",
  },
  NOT_IMPLEMENTED: {},
};
