/* eslint-disable */
// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var share_share_pb = require('./share/share_pb.js');

function serialize_sharepb_Empty(arg) {
  if (!(arg instanceof share_share_pb.Empty)) {
    throw new Error('Expected argument of type sharepb.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sharepb_Empty(buffer_arg) {
  return share_share_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_AdminProfileRequest(arg) {
  if (!(arg instanceof user_pb.AdminProfileRequest)) {
    throw new Error('Expected argument of type user.api.AdminProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_AdminProfileRequest(buffer_arg) {
  return user_pb.AdminProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_AdminProfileResponse(arg) {
  if (!(arg instanceof user_pb.AdminProfileResponse)) {
    throw new Error('Expected argument of type user.api.AdminProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_AdminProfileResponse(buffer_arg) {
  return user_pb.AdminProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_ChangePasswordRequest(arg) {
  if (!(arg instanceof user_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type user.api.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_ChangePasswordRequest(buffer_arg) {
  return user_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GetCsrfTokenRequest(arg) {
  if (!(arg instanceof user_pb.GetCsrfTokenRequest)) {
    throw new Error('Expected argument of type user.api.GetCsrfTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GetCsrfTokenRequest(buffer_arg) {
  return user_pb.GetCsrfTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GetCsrfTokenResponse(arg) {
  if (!(arg instanceof user_pb.GetCsrfTokenResponse)) {
    throw new Error('Expected argument of type user.api.GetCsrfTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GetCsrfTokenResponse(buffer_arg) {
  return user_pb.GetCsrfTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GetDetailInfoRequest(arg) {
  if (!(arg instanceof user_pb.GetDetailInfoRequest)) {
    throw new Error('Expected argument of type user.api.GetDetailInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GetDetailInfoRequest(buffer_arg) {
  return user_pb.GetDetailInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GetDetailInfoResponse(arg) {
  if (!(arg instanceof user_pb.GetDetailInfoResponse)) {
    throw new Error('Expected argument of type user.api.GetDetailInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GetDetailInfoResponse(buffer_arg) {
  return user_pb.GetDetailInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GetUserListRequest(arg) {
  if (!(arg instanceof user_pb.GetUserListRequest)) {
    throw new Error('Expected argument of type user.api.GetUserListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GetUserListRequest(buffer_arg) {
  return user_pb.GetUserListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GetUserListResponse(arg) {
  if (!(arg instanceof user_pb.GetUserListResponse)) {
    throw new Error('Expected argument of type user.api.GetUserListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GetUserListResponse(buffer_arg) {
  return user_pb.GetUserListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GoogleAuthGetSetupInfoRequest(arg) {
  if (!(arg instanceof user_pb.GoogleAuthGetSetupInfoRequest)) {
    throw new Error('Expected argument of type user.api.GoogleAuthGetSetupInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GoogleAuthGetSetupInfoRequest(buffer_arg) {
  return user_pb.GoogleAuthGetSetupInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GoogleAuthGetSetupInfoResponse(arg) {
  if (!(arg instanceof user_pb.GoogleAuthGetSetupInfoResponse)) {
    throw new Error('Expected argument of type user.api.GoogleAuthGetSetupInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GoogleAuthGetSetupInfoResponse(buffer_arg) {
  return user_pb.GoogleAuthGetSetupInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GoogleAuthSetRequest(arg) {
  if (!(arg instanceof user_pb.GoogleAuthSetRequest)) {
    throw new Error('Expected argument of type user.api.GoogleAuthSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GoogleAuthSetRequest(buffer_arg) {
  return user_pb.GoogleAuthSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GoogleAuthVerifyRequest(arg) {
  if (!(arg instanceof user_pb.GoogleAuthVerifyRequest)) {
    throw new Error('Expected argument of type user.api.GoogleAuthVerifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GoogleAuthVerifyRequest(buffer_arg) {
  return user_pb.GoogleAuthVerifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_GoogleAuthVerifyResponse(arg) {
  if (!(arg instanceof user_pb.GoogleAuthVerifyResponse)) {
    throw new Error('Expected argument of type user.api.GoogleAuthVerifyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_GoogleAuthVerifyResponse(buffer_arg) {
  return user_pb.GoogleAuthVerifyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_LoginRequest(arg) {
  if (!(arg instanceof user_pb.LoginRequest)) {
    throw new Error('Expected argument of type user.api.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_LoginRequest(buffer_arg) {
  return user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_LogoutRequest(arg) {
  if (!(arg instanceof user_pb.LogoutRequest)) {
    throw new Error('Expected argument of type user.api.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_LogoutRequest(buffer_arg) {
  return user_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_ManagerUserRequest(arg) {
  if (!(arg instanceof user_pb.ManagerUserRequest)) {
    throw new Error('Expected argument of type user.api.ManagerUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_ManagerUserRequest(buffer_arg) {
  return user_pb.ManagerUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_ProfileRequest(arg) {
  if (!(arg instanceof user_pb.ProfileRequest)) {
    throw new Error('Expected argument of type user.api.ProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_ProfileRequest(buffer_arg) {
  return user_pb.ProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_ProfileResponse(arg) {
  if (!(arg instanceof user_pb.ProfileResponse)) {
    throw new Error('Expected argument of type user.api.ProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_ProfileResponse(buffer_arg) {
  return user_pb.ProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_RegisterRequest(arg) {
  if (!(arg instanceof user_pb.RegisterRequest)) {
    throw new Error('Expected argument of type user.api.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_RegisterRequest(buffer_arg) {
  return user_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_ResetPasswordRequest(arg) {
  if (!(arg instanceof user_pb.ResetPasswordRequest)) {
    throw new Error('Expected argument of type user.api.ResetPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_ResetPasswordRequest(buffer_arg) {
  return user_pb.ResetPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_SSOLoginRequest(arg) {
  if (!(arg instanceof user_pb.SSOLoginRequest)) {
    throw new Error('Expected argument of type user.api.SSOLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_SSOLoginRequest(buffer_arg) {
  return user_pb.SSOLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_SignResponse(arg) {
  if (!(arg instanceof user_pb.SignResponse)) {
    throw new Error('Expected argument of type user.api.SignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_SignResponse(buffer_arg) {
  return user_pb.SignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_TriggerAuthRequest(arg) {
  if (!(arg instanceof user_pb.TriggerAuthRequest)) {
    throw new Error('Expected argument of type user.api.TriggerAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_TriggerAuthRequest(buffer_arg) {
  return user_pb.TriggerAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_api_UpdateDetailInfoRequest(arg) {
  if (!(arg instanceof user_pb.UpdateDetailInfoRequest)) {
    throw new Error('Expected argument of type user.api.UpdateDetailInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_api_UpdateDetailInfoRequest(buffer_arg) {
  return user_pb.UpdateDetailInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  triggerAuth: {
    path: '/user.api.UserService/TriggerAuth',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.TriggerAuthRequest,
    responseType: share_share_pb.Empty,
    requestSerialize: serialize_user_api_TriggerAuthRequest,
    requestDeserialize: deserialize_user_api_TriggerAuthRequest,
    responseSerialize: serialize_sharepb_Empty,
    responseDeserialize: deserialize_sharepb_Empty,
  },
  register: {
    path: '/user.api.UserService/Register',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RegisterRequest,
    responseType: user_pb.SignResponse,
    requestSerialize: serialize_user_api_RegisterRequest,
    requestDeserialize: deserialize_user_api_RegisterRequest,
    responseSerialize: serialize_user_api_SignResponse,
    responseDeserialize: deserialize_user_api_SignResponse,
  },
  login: {
    path: '/user.api.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LoginRequest,
    responseType: user_pb.SignResponse,
    requestSerialize: serialize_user_api_LoginRequest,
    requestDeserialize: deserialize_user_api_LoginRequest,
    responseSerialize: serialize_user_api_SignResponse,
    responseDeserialize: deserialize_user_api_SignResponse,
  },
  sSOLogin: {
    path: '/user.api.UserService/SSOLogin',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SSOLoginRequest,
    responseType: user_pb.SignResponse,
    requestSerialize: serialize_user_api_SSOLoginRequest,
    requestDeserialize: deserialize_user_api_SSOLoginRequest,
    responseSerialize: serialize_user_api_SignResponse,
    responseDeserialize: deserialize_user_api_SignResponse,
  },
  logout: {
    path: '/user.api.UserService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LogoutRequest,
    responseType: share_share_pb.Empty,
    requestSerialize: serialize_user_api_LogoutRequest,
    requestDeserialize: deserialize_user_api_LogoutRequest,
    responseSerialize: serialize_sharepb_Empty,
    responseDeserialize: deserialize_sharepb_Empty,
  },
  googleAuthGetSetupInfo: {
    path: '/user.api.UserService/GoogleAuthGetSetupInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GoogleAuthGetSetupInfoRequest,
    responseType: user_pb.GoogleAuthGetSetupInfoResponse,
    requestSerialize: serialize_user_api_GoogleAuthGetSetupInfoRequest,
    requestDeserialize: deserialize_user_api_GoogleAuthGetSetupInfoRequest,
    responseSerialize: serialize_user_api_GoogleAuthGetSetupInfoResponse,
    responseDeserialize: deserialize_user_api_GoogleAuthGetSetupInfoResponse,
  },
  googleAuthVerify: {
    path: '/user.api.UserService/GoogleAuthVerify',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GoogleAuthVerifyRequest,
    responseType: user_pb.GoogleAuthVerifyResponse,
    requestSerialize: serialize_user_api_GoogleAuthVerifyRequest,
    requestDeserialize: deserialize_user_api_GoogleAuthVerifyRequest,
    responseSerialize: serialize_user_api_GoogleAuthVerifyResponse,
    responseDeserialize: deserialize_user_api_GoogleAuthVerifyResponse,
  },
  googleAuthSet: {
    path: '/user.api.UserService/GoogleAuthSet',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GoogleAuthSetRequest,
    responseType: share_share_pb.Empty,
    requestSerialize: serialize_user_api_GoogleAuthSetRequest,
    requestDeserialize: deserialize_user_api_GoogleAuthSetRequest,
    responseSerialize: serialize_sharepb_Empty,
    responseDeserialize: deserialize_sharepb_Empty,
  },
  profile: {
    path: '/user.api.UserService/Profile',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ProfileRequest,
    responseType: user_pb.ProfileResponse,
    requestSerialize: serialize_user_api_ProfileRequest,
    requestDeserialize: deserialize_user_api_ProfileRequest,
    responseSerialize: serialize_user_api_ProfileResponse,
    responseDeserialize: deserialize_user_api_ProfileResponse,
  },
  resetPassword: {
    path: '/user.api.UserService/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ResetPasswordRequest,
    responseType: user_pb.SignResponse,
    requestSerialize: serialize_user_api_ResetPasswordRequest,
    requestDeserialize: deserialize_user_api_ResetPasswordRequest,
    responseSerialize: serialize_user_api_SignResponse,
    responseDeserialize: deserialize_user_api_SignResponse,
  },
  changePassword: {
    path: '/user.api.UserService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ChangePasswordRequest,
    responseType: user_pb.SignResponse,
    requestSerialize: serialize_user_api_ChangePasswordRequest,
    requestDeserialize: deserialize_user_api_ChangePasswordRequest,
    responseSerialize: serialize_user_api_SignResponse,
    responseDeserialize: deserialize_user_api_SignResponse,
  },
  getCsrfToken: {
    path: '/user.api.UserService/GetCsrfToken',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetCsrfTokenRequest,
    responseType: user_pb.GetCsrfTokenResponse,
    requestSerialize: serialize_user_api_GetCsrfTokenRequest,
    requestDeserialize: deserialize_user_api_GetCsrfTokenRequest,
    responseSerialize: serialize_user_api_GetCsrfTokenResponse,
    responseDeserialize: deserialize_user_api_GetCsrfTokenResponse,
  },
  getDetailInfo: {
    path: '/user.api.UserService/GetDetailInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetDetailInfoRequest,
    responseType: user_pb.GetDetailInfoResponse,
    requestSerialize: serialize_user_api_GetDetailInfoRequest,
    requestDeserialize: deserialize_user_api_GetDetailInfoRequest,
    responseSerialize: serialize_user_api_GetDetailInfoResponse,
    responseDeserialize: deserialize_user_api_GetDetailInfoResponse,
  },
  updateDetailInfo: {
    path: '/user.api.UserService/UpdateDetailInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateDetailInfoRequest,
    responseType: share_share_pb.Empty,
    requestSerialize: serialize_user_api_UpdateDetailInfoRequest,
    requestDeserialize: deserialize_user_api_UpdateDetailInfoRequest,
    responseSerialize: serialize_sharepb_Empty,
    responseDeserialize: deserialize_sharepb_Empty,
  },
  //
getUserList: {
    path: '/user.api.UserService/GetUserList',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserListRequest,
    responseType: user_pb.GetUserListResponse,
    requestSerialize: serialize_user_api_GetUserListRequest,
    requestDeserialize: deserialize_user_api_GetUserListRequest,
    responseSerialize: serialize_user_api_GetUserListResponse,
    responseDeserialize: deserialize_user_api_GetUserListResponse,
  },
  managerUser: {
    path: '/user.api.UserService/ManagerUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ManagerUserRequest,
    responseType: share_share_pb.Empty,
    requestSerialize: serialize_user_api_ManagerUserRequest,
    requestDeserialize: deserialize_user_api_ManagerUserRequest,
    responseSerialize: serialize_sharepb_Empty,
    responseDeserialize: deserialize_sharepb_Empty,
  },
  //
// admin
//
adminProfile: {
    path: '/user.api.UserService/AdminProfile',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.AdminProfileRequest,
    responseType: user_pb.AdminProfileResponse,
    requestSerialize: serialize_user_api_AdminProfileRequest,
    requestDeserialize: deserialize_user_api_AdminProfileRequest,
    responseSerialize: serialize_user_api_AdminProfileResponse,
    responseDeserialize: deserialize_user_api_AdminProfileResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
