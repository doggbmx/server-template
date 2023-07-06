import { AuthPayload } from "../../domain/models/auth_payload";

export const authPayloadFromJson = (item: any): AuthPayload => {
  return {
    uid: item.localId,
    email: item.email,
    idToken: item.idToken,
    displayName: item.displayName,
  };
};
