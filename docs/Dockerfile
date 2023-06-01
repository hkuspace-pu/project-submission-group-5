FROM mcr.microsoft.com/azure-sql-edge

COPY . /docs
WORKDIR /docs

ENV ACCEPT_EULA=1
ENV MSSQL_SA_PASSWORD="2023Gr0up5!"

RUN /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "2023Gr0up5!" -i setup.sql
RUN /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "2023Gr0up5!" -i sample.sql