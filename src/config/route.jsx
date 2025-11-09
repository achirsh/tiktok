import { allMenu } from "./menu.jsx";
import { Routes, Route } from "react-router-dom";

export function RouteRender() {
    return (
        <Routes>
            <Route path={'/'}>
                {allMenu.map((item) => {
                    return (
                        <Route 
                            path={item.page} 
                            key={`route-${item.page}`}
                            element={item.component}
                        />
                    )
                })}
                <Route path="*" element={<div>页面找不到了</div>} />
            </Route>
        </Routes>
    )
}
