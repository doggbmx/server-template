export const SELECT_USERS_QUERY = `SELECT * FROM public.user;`;

export const SELECT_USER_QUERY = `SELECT * FROM public.user WHERE id = $1;`;

export const SELECT_USER_BY_EMAIL = `SELECT * FROM public.user WHERE email = $1 LIMIT 1;`;

export const INSERT_USER_QUERY = `
INSERT INTO public.user (username, email, password)
VALUES ($1, $2, $3)
RETURNING *;
`;

export const UPDATE_USER_QUERY = `
UPDATE public.user
SET username=$2, email=$3, password=$4, recovery_token=$5
WHERE id=$1 RETURNING *;
`;
