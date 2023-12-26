import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface SettingsPageProps{
    params: {
        storeId: string;
    }
};

const SettingsPage : React.FC<SettingsPageProps> = ({params}) => {

    const {userId} = auth();

    if(!userId){
        redirect('/sign-in');
     }

    return (
        <div>
            Hello Settings
        </div>
    )
}

export default SettingsPage;