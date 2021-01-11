# Static Requirements FrontEnd Notes

#### [1] Documentation from Chris About Forge
<pre>
Link: <a href="http://localhost:8200/swagger-ui.html#/"> http://localhost:8200/swagger-ui.html#/ </a>
</pre>

#### [2] Angular Widget
<pre>
Link: <a href="https://material.angular.io/"> https://material.angular.io/ </a>
</pre>

#### [3] Trello 
<pre>
Link: <a href="https://connect.revature.net/board/matt-knighten-forge-batch-889-1/section"> https://connect.revature.net/board/matt-knighten-forge-batch-889-1/section </a>
</pre>

#### [4] H2
<pre>
Link: <a href="http://localhost:8200/h2-console/"> http://localhost:8200/h2-console/ </a>
</pre>

##### [4.1] [ H2 Login credentials ]
```sh
JDBC URL: jdbc:h2:mem:memdb
username: sa
pasword: password
```

##### [4.2] [ Admin Login credentials ]
```sh
admin@revature.net
admin
```

##### [4.3] [ User Login credentials ]
```sh
user@revature.net
password
```

#### [5] Angular FRONT-END

##### [5.1] Admin Team
<pre>
[1] <a href="http://localhost:4200/login"> http://localhost:4200/login </a>
[2] <a href="http://localhost:4200/admin-home"> http://localhost:4200/admin-home </a>
[3] <a href="http://localhost:4200/admin-criteria"> http://localhost:4200/admin-criteria </a>
</pre>

##### [5.2] User Team
<pre>
[1] <a href="http://localhost:4200/registration"> http://localhost:4200/registration </a> 
[2] <a href="http://localhost:4200/login"> http://localhost:4200/login </a>
[3] <a href="http://localhost:4200/user-home"> http://localhost:4200/user-home</a>
[4] <a href="http://localhost:4200/portfolio/"> http://localhost:4200/portfolio</a>
[4.1] <a href="http://localhost:4200/portfolio/{id}"> http://localhost:4200/portfolio/{id} </a>
</pre>

##### [5] Items
<pre>
[5.1] <a href="http://localhost:4200/project"> http://localhost:4200/aboutMe </a>
[5.2] <a href="http://localhost:4200/education"> http://localhost:4200/education </a>
[5.3] <a href="http://localhost:4200/industryEquivalency"> http://localhost:4200/industryEquivalency </a> (doesn't work)
[5.4] <a href="http://localhost:4200/project"> http://localhost:4200/project </a> 
[5.5] <a href="http://localhost:4200/skillMatrix"> http://localhost:4200/skillMatrix </a> (doesn't work)
</pre>

##### [5.3] Misc
<pre>
[1] <a href="http://localhost:4200/navbar"> http://localhost:4200/navbar </a>
</pre>

##### [5.3] STS BACK-END (JSON)

[1] Login Info:
<pre>
<a href="http://localhost:8200/service/getAllUsers"> http://localhost:8200/service/getAllUsers </a>
<a href="http://localhost:8200/service/getUser/{1}"> http://localhost:8200/service/getUser/{id}</a>
</pre>

[2] Portfolio Info:
<pre>
<a href="http://localhost:8200/service/getAllPortfolios"> http://localhost:8200/service/getAllPortfolios  </a>
<a href="http://localhost:8200/service/getPortfolioByID/{id}"> http://localhost:8200/service/getPortfolioByID/{id}}</a> (doesn't work)
</pre>

[3] Criteria Info:
<pre>
<a href="http://localhost:8200/service/getAllCriteria"> http://localhost:8200/service/getAllCriteria </a>
<a href="http://localhost:8200/service/criteria/{1}"> http://localhost:8200/service/criteria/{id} </a>
</pre>

[4] Misc Info
<pre>
<a href="http://localhost:8200/session/loggers "> http://localhost:8200/session/loggers  </a>
<a href="http://localhost:8200/service/getUserByEmail/"> http://localhost:8200/service/getUserByEmail/ </a> (doesn't work)
</pre>

### Setting up Angular
 ```sh
ng add @angular/material (optional)
npm install
ng serve -o
 ```
