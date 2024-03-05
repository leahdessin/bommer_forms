export interface FilterColumnOption {
    name: string,
    displayName: string,
    filterActive: boolean
}
export interface FilterableColumnProps {
    name: string,
    displayName: string,
    isCurrentlyFiltered: boolean,
    filterOptions: FilterColumnOption[],
}