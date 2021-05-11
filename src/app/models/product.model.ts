import { Timestamp } from "rxjs/internal/operators/timestamp";

export interface Product {
    id: string;
    title: string | undefined;
    description: string | undefined;
    creationDate: Timestamp<Date> | undefined;
}
