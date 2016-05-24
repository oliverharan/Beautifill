using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Beautifill.Startup))]
namespace Beautifill
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
