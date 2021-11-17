import ContentLayout from "./ContentLayout";
import Credits from "./Credits";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className='min-h-screen grid grid-rows-[auto,1fr,auto] items-center p-6'>

      <header>
        <ContentLayout><Header /></ContentLayout>
      </header>

      <main>
        <ContentLayout>{children}</ContentLayout>
      </main>

      <footer>
        <ContentLayout><Credits /></ContentLayout>
      </footer>
    </div>
  );
}
export default AppLayout;