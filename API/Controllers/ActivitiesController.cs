using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{

    [Route("api/[controller]")]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _meditator;
        private readonly ILogger<List> _logger;
        public ActivitiesController(IMediator meditator, ILogger<List> logger)
        {
            _logger = logger;
            _meditator = meditator;
        }


        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List()
        {
            return await _meditator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            return await _meditator.Send(new Detail.Query { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _meditator.Send(command);
        }
    }
}