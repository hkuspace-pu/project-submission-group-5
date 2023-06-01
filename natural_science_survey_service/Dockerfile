FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

# Copy your backend project files
COPY . ./
RUN dotnet restore

# Build and publish
RUN dotnet publish -c Release -o out

# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
EXPOSE 80
EXPOSE 5000
WORKDIR /app
COPY --from=build /app/out ./
ENTRYPOINT ["dotnet", "natural_science_survey_service.dll"]
