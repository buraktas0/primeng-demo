import { Identifiable } from "./identifiable.model";

export class BaseObjectModel implements Identifiable {
    id?: any;
    isActive?: boolean;
    createDate?: Date;
}