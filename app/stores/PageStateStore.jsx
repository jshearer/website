import { Actions, Store, Flummox } from 'flummox';

class Flux extends Flummox{
  constructor(){
    super();

    // Create actions first so our store can reference them in
    // its constructor
    this.createActions('pages', PageStateActions);

    // Extra arguments are sent to the store's constructor. Here, we're
    // passing a reference to this Flux instance
    this.createStore('pages', PageStateStore, this);
  }
}

class PageStateActions extends Actions{
  changePage(newPage){
    return {
      page: newPage
    }
  }
}

class PageStateStore extends Store {

  constructor(flux) {
    super(); // Don't forget this step

    const pageActionIds = flux.getActionIds('pages');
    this.register(pageActionIds.changePage, this.handlePageChange);

    this.state = {
      page: null,
    };
  }

  handlePageChange(page) {
    this.replaceState({page: page});
  }

  getActive(){
    if(this.state.page){ 
      return this.state.page.page;
    } else{
      return null;
    }
  }

  isActive(page){
    let active = this.getActive();
    if(active){
      return active==page;
    }
  }

}

export {Flux};