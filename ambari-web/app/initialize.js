/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


window.App = require('app');

App.testMode = false;

require('messages');
require('utils/data_table');
require('utils/db');
require('utils/helper');
require('models');
require('controllers');
require('views');
require('router');

require('mappers/server_data_mapper');
require('mappers/services_mapper');
require('mappers/hosts_mapper');
require('mappers/cluster_mapper');
require('mappers/jobs_mapper');
require('mappers/runs_mapper');
require('mappers/racks_mapper');
require('mappers/alerts_mapper');
require('mappers/users_mapper');

require('utils/http_client');

App.initialize();

/**
 * Test Mode values
 */
App.test_hostname = 'hostname';

console.log('after initialize');
console.log('TRACE: app.js-> localStorage:Ambari.authenticated=' + localStorage.getItem('Ambari' + 'authenticated'));
console.log('TRACE: app.js-> localStorage:currentStep=' + localStorage.getItem(App.get('router').getLoginName() + 'Installer' + 'currentStep'));
console.log('TRACE: app.js-> router.authenticated=' + App.get('router.loggedIn'));
