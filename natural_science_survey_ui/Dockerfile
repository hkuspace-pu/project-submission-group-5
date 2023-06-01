FROM node:14

COPY ./build /build
WORKDIR /natural_science_survey_ui
EXPOSE 3000
RUN npm install -g serve
ENTRYPOINT ["serve", "-s", "/build"]