import TitleComponent from "./components/title";
import FooterComponent from "./components/footer";
import HomeComponent from "./components/home";

function App() {
  return (
    <>
        <table style={{width:'100%'}}>
            <tr>
                <TitleComponent />
            </tr>
            <tr>
                <HomeComponent />
            </tr>
            <tr>
                <FooterComponent />
            </tr>
        </table>
    </>
  );
}

export default App;
