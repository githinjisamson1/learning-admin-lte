import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div>
      {" "}
      <footer class="main-footer">
        <strong>
          Copyright &copy;
          {" "}
          {date.getFullYear()}
          <a href="https://adminlte.io">Samson Githinji</a>.
        </strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.2.0
        </div>
      </footer>
    </div>
  );
};

export default Footer;
