export const getCurrentPath = (useLocation) => {
const location = useLocation();
const currentPath = location.pathname;
const validCurrentPath = currentPath.slice(1, currentPath.length);
return {currentPath, validCurrentPath}
}