# natural_science_survey_service

# Run Docker commands to create a local MS SQL database
```
docker run -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=2023Gr0up5!' -p 1433:1433 --name NSSsqlserv -d mcr.microsoft.com/azure-sql-edge
```

# Create Database
```sql
CREATE DATABASE NaturalScienceSurvey;
```