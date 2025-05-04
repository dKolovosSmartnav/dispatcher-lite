export type Item = {
    id: number,
    description: string,
    quantity: number,
    qrCode: string, // required → used to scan & find item inside job
    specialInstructions?: string[],
    notes?: string[]
}

export interface itemRepository{
    fetchJobItems(jobId: number): Promise<Item[]>
    fetchItem(itemId: number): Promise<Item>
    fetchItemFromQr(qrCode: string): Promise<Item>
}