export type TTask = {
    id: string;
    description: string;
    dateCreated: number;
    closed: boolean;
    dateClosed: number | null;
}