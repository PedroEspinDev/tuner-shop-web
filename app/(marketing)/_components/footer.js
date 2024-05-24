import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-neutral-200 text-center text-black">
      <p>&copy; 2023 TunerShop. Todos los derechos reservados.</p>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            <Button size="sm" variant="ghost">
              Privacy Policy
            </Button>
            <Button size="sm" variant="ghost">
              Terms of Service
              </Button>
        </div>
    </div>
  );
}

export default Footer;
