export type SearchSelected = 'name' | 'advanced';
/** Each filter is optional. */
export type AdvancedFilters = {
    'ingredient'?: string;
    'glass'?: string;
    'category'?: string;
}

export type CategoryFilter = {
    'strCategory': string;
}
export type IngredientFilter = {
    'strIngredient1': string;
}
export type GlassFilter = {
    'strGlass': string;
}

export type CategoryFiltersData = {
    drinks: Array<CategoryFilter>
}
export type IngredientFiltersData = {
    drinks: Array<IngredientFilter>
}
export type GlassFiltersData = {
    drinks: Array<GlassFilter>
}

export type Cocktail = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}
