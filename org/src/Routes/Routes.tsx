import { createBrowserRouter } from "react-router-dom";
import App from "src/app/app";
import AuthPage from "src/pages/AuthPage";
import NotesPage from "src/pages/NotesPage";
import PlacePage from "src/pages/PlacePage";
import SearchPage from "src/pages/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {path: "", element: <AuthPage></AuthPage>},
            {path: "search", element: <SearchPage></SearchPage>},
            {path: "notes", element: <NotesPage></NotesPage>},
            {path: "place", element: <PlacePage></PlacePage>},
        ]
    }
])