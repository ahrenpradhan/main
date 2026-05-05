const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-zinc-400 bg-zinc-100 bg-opacity-40">
      <div className="py-4 text-center">
        <div>@{currentYear} RP Solders</div>
      </div>
    </div>
  );
};

export default Footer;
