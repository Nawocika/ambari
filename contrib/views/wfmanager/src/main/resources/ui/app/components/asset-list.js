/*
*    Licensed to the Apache Software Foundation (ASF) under one or more
*    contributor license agreements.  See the NOTICE file distributed with
*    this work for additional information regarding copyright ownership.
*    The ASF licenses this file to You under the Apache License, Version 2.0
*    (the "License"); you may not use this file except in compliance with
*    the License.  You may obtain a copy of the License at
*
*        http://www.apache.org/licenses/LICENSE-2.0
*
*    Unless required by applicable law or agreed to in writing, software
*    distributed under the License is distributed on an "AS IS" BASIS,
*    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*    See the License for the specific language governing permissions and
*    limitations under the License.
*/
import Ember from 'ember';

export default Ember.Component.extend({
  currentAssetId: null,
  assetNotSelected: true,
  assetSearchCriteria: "",
  fuseSearchOptions: {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    keys: [{
      name: 'name',
      weight: 0.3
    }, {
      name: 'type',
      weight: 0.5
    }, {
      name: 'description',
      weight: 0.1
    }, {
      name: 'owner',
      weight: 0.1
    }]
  },
  initialize: function() {
    var self = this;
    this.$('#asset_list_dialog').modal('show');
    this.$('#asset_list_dialog').modal().on('hidden.bs.modal', function() {
      this.sendAction('showAssetList', false);
    }.bind(this));

    this.$('#asset-list').on('click', 'tr', function(event) {
      if(!$(this).hasClass('active-asset-row')) {
        $(this).addClass('active-asset-row').siblings().removeClass('active-asset-row');
      }
      self.set('currentAssetId', $(this).data("assetId"));
      self.set('assetNotSelected', false);
    });
    this.initializeFuseSearch();
  }.on('didInsertElement'),
  initializeFuseSearch() {
     // var fuse = new Fuse(this.get("assetList"), this.get('fuseSearchOptions'));
     // this.set('fuse', fuse);
     // this.set('filteredAssetList', fuse.search(this.get("assetSearchCriteria")));
     this.set('fuse', new Fuse(this.get("assetList"), this.get('fuseSearchOptions')));
     this.set('filteredAssetList', this.get("assetList"));
   },
   assetSearchCriteriaObserver : Ember.observer('assetSearchCriteria', function(){
     if (this.get("assetSearchCriteria") !== "") {
       this.set('filteredAssetList', this.get('fuse').search(this.get("assetSearchCriteria")));
     } else {
       this.set('filteredAssetList', this.get("assetList"));
     }
   }),
  actions: {
    close() {
      this.$('#asset_list_dialog').modal('hide');
    },
    importAsset() {
      this.$('#asset_list_dialog').modal('hide');
      this.sendAction('importAsset', this.get('assetList').filterBy('id', this.currentAssetId.toString())[0]);
    }
  }
});
