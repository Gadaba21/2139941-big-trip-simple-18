import NewFilterView from './view/filter-view.js';
import NewSortView from './view/sort-view.js';
import NewEditFormView from './view/edit-form-view.js';
import {render} from './render.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteHeaderElement1 = document.querySelector('.trip-events');

render(new NewFilterView(), siteHeaderElement);
render(new NewSortView(), siteHeaderElement1);
render(new NewEditFormView(), siteHeaderElement1);
