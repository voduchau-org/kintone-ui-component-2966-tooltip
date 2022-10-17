export const PAGINATION_CSS = `
  .kuc-base-pagination__group {
    margin-top: 10px;
  }
  .kuc-base-pagination__group button {
    cursor: pointer;
  }
  .kuc-base-pagination__group__pager-prev {
    border: none;
    background-color: transparent;
    visibility: visible;
  }
  .kuc-base-pagination__group__pager-next {
    border: none;
    background-color: transparent;
    visibility: visible;
  }
  .kuc-base-pagination__group__pager-next:hover svg path,
  .kuc-base-pagination__group__pager-prev:hover svg path,
  .kuc-base-pagination__group__pager-next:focus-visible svg path,
  .kuc-base-pagination__group__pager-prev:focus-visible svg path
  {
    fill: #3498db;
  }
  .kuc-base-pagination__group__pager-next:focus-visible,
  .kuc-base-pagination__group__pager-prev:focus-visible {
    outline: 1px solid #3498db;
  }
  .kuc-base-pagination__group__pager-next svg,
  .kuc-base-pagination__group__pager-prev svg {
    margin-top: 3px;
  }
  .kuc-base-pagination__group__pager-disable {
    visibility: hidden;
  }
`;
