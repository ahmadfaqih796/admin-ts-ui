import { UseAuth } from "../hooks/useAuth";

interface Setting {
  name: string;
  value: number;
  props?: { age: number };
}
const SettingsPage: React.FC<any> = (setting: Setting) => {
  const datax = new UseAuth("faqih", 28);
  const pesan = datax.printMessage();
  return (
    <div>
      <p>{pesan}</p>
      SettingsPage {setting.name} {setting.value}
    </div>
  );
};

export default SettingsPage;
