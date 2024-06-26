import { createBrowserRouter } from "react-router-dom";
import App from "src/app/app";
import AuthPage from "@pages/AuthPage";
import NotesPage from "@pages/NotesPage";
import PlacePage from "@pages/PlacePage";
import SearchPage from "@pages/SearchPage";

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