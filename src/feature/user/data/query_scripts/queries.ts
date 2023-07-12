export const SELECT_USERS_QUERY = `SELECT * FROM public.user;`;

export const SELECT_USER_QUERY = `SELECT * FROM public.user WHERE id = $1;`;

export const SELECT_USER_BY_EMAIL = `SELECT * FROM public.user WHERE email = $1 LIMIT 1;`;

export const SELECT_USER_BY_FIREBASEID = `SELECT * FROM public.user WHERE firebase_id = $1 LIMIT 1;`;

export const INSERT_USER_QUERY = `
INSERT INTO public.user (name, email, firebase_id)
VALUES ($1, $2, $3)
RETURNING *;
`;

export const DELETE_USER_QUERY = `
DELETE from public.user
WHERE id=$1 RETURNING *;
`;
export const UPDATE_USER_QUERY = `
UPDATE public.user
SET name=$2, email=$3, password=$4, recovery_token=$5
WHERE id=$1 RETURNING *;
`;
