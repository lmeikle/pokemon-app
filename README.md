## RESTful API with the Serverless Framework

Based on following:

https://dev.to/sagar/build-a-restful-api-with-the-serverless-framework-ene?utm_source=Newsletter+Subscribers&utm_campaign=fcbc9b2d6e-EMAIL_CAMPAIGN_2018_10_22_04_05&utm_medium=email&utm_term=0_d8f11d5d1e-fcbc9b2d6e-154396177

### Notes:

- To create a local database using MySQL Shell:<br>
  `mysql-js> \sql`<br>
  `mysql-js> \connect root@localhost`<br>
  `CREATE DATABASE pokemon_db;`

- To add some pokemon<br>
  `INSERT INTO pokemon_tb (id, name, height, weight, avatar) VALUES ('1', 'stupid-pokemon', '20', '30', 'whatever-avatar');`<br>
  `INSERT INTO pokemon_tb (id, name, height, weight, avatar) VALUES ('2', 'clever-pokemon', '50', '120', 'whatever-avatar');`

- If you get an auth error when running the server<br>
  `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<my_password>';`

- To run the it locally<br>
  `npm start`

- To deploy<br>
  `serverless deploy`<br>
  Need to have setup AWS credentials:
  https://serverless.com/framework/docs/providers/aws/guide/credentials/<br>
  `serverless config credentials --provider aws --key <mykey> --secret <mysecret>`

- To setup the AWS RDS Database, using mysql shell<br>
  `\connect root@pokemondb.cgwrqfdgtwog.eu-west-2.rds.amazonaws.com:3306;`
  `use pokemonDB`
  then run scripts from the article and my 2 inserts

- I had to go and mess with my Database security group settings here as I was constantly getting 502 errors:<br>
  https://eu-west-2.console.aws.amazon.com/rds/home?region=eu-west-2#dbinstance:id=pokemondb

- Live endpoints<br>
  GET - https://vrzq1d0s0m.execute-api.eu-west-2.amazonaws.com/dev/pokemon<br>
  GET - https://vrzq1d0s0m.execute-api.eu-west-2.amazonaws.com/dev/pokemon/{id}<br>
  POST - https://vrzq1d0s0m.execute-api.eu-west-2.amazonaws.com/dev/pokemon<br>
  PUT - https://vrzq1d0s0m.execute-api.eu-west-2.amazonaws.com/dev/pokemon/{id}<br>
  DELETE - https://vrzq1d0s0m.execute-api.eu-west-2.amazonaws.com/dev/pokemon/{id}<br>

### I have deleted my DB instance as it was going to start charging, but the snapshot is here:

https://eu-west-2.console.aws.amazon.com/rds/home?region=eu-west-2#snapshot:engine=mysql;id=pokemondb-final-snapshot
