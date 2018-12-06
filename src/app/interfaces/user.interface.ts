export interface User {
    username: string;
    email: string;
    password: string;
    roles?: Array<string>;
    user_id$?: number;

}