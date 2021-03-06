/*
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

package org.apache.ambari.view.hive2.client;

import org.apache.ambari.view.hive2.actor.message.Connect;

public class ConnectionConfig {
  private final String username;
  private String password;
  private final String jdbcUrl;

  public ConnectionConfig(String username, String password, String jdbcUrl) {
    this.username = username;
    this.password = password;
    this.jdbcUrl = jdbcUrl;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getUsername() {
    return username;
  }

  public String getPassword() {
    return password;
  }

  public String getJdbcUrl() {
    return jdbcUrl;
  }

  public Connect createConnectMessage() {
    return new Connect(username, password, jdbcUrl);
  }

  public Connect createConnectMessage(String jobId) {
    return new Connect(jobId, username, password, jdbcUrl);
  }


}
