const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Domingos Conde. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Project Manager based in Luanda, Angola
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
