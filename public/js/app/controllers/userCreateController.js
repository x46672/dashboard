App.UsersCreateController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store!
      var newUser = this.store.createRecord('user', this.get('model'));
      newUser.save();

      // redirect the User to itself
      transitionToRoute('user', newUser);
    }
  }
});
