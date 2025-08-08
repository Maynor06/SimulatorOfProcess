import FormProceso from "./FormProceso";
import QuequeProcess from "./QuequeProcess";

const Home = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
                    <h1 className="relative top-8 text-5xl font-bold text-center " >Simulador de Gestión de Procesos en Memoria</h1>
                    
                    <div className="flex gap-8 justify-center items-center mt-32" >
                        <FormProceso />
                        <QuequeProcess />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;