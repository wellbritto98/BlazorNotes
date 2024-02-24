using Blazored.Modal;
using Blazored.Toast;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using BlazorNotes;
using Blazored.LocalStorage;
using WebComponents;


string credentialFirebasePath = "BlazorNotes/Properties/blazor-notes-firebase-adminsdk-y20l2-de04d3d319.json";
Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", credentialFirebasePath);
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
builder.Services.AddBlazoredModal();
builder.Services.AddBlazoredToast();
builder.Services.AddBlazoredLocalStorage();
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });


await builder.Build().RunAsync();