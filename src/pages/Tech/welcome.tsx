import MUIDrawerLeft from "../../components/LeftNavigation";

const pages = ['Audio', 'Video', 'Lights'];

export function TechWelcome(){
    return(
        <MUIDrawerLeft tabs={pages}/>
    );
}