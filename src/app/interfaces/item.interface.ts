export interface Item {
    type_gast: string;
    resolution: number;
    purchase_order: string;
    bill_number: number;
    rut: string;
    provider: string;
    detail: string;
    money: number;
    budget_item: string;
    name_item: string;
    status: string;
    item_id$?: number;
}