import teleGroupLogo from "@/assets/telegroup-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          <img 
            src={teleGroupLogo} 
            alt="TeleGroup" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;