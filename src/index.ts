import app from './loaders/application';

const port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
