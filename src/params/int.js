export const match = (param) => {
    return Number.isInteger(+param) && +param > 0;
}