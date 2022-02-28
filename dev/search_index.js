var documenterSearchIndex = {"docs":
[{"location":"extras/#Statistics","page":"Extras","title":"Statistics","text":"","category":"section"},{"location":"extras/","page":"Extras","title":"Extras","text":"You can get some statistics after the problem is solved.","category":"page"},{"location":"extras/","page":"Extras","title":"Extras","text":"Variable Description\nnintvars Number of integer variables\nnbinvars Number of binary variables\nnnodes Number of explored nodes in branch and bound\nncuts Number of cuts\nnbranches Number of branches\nnlevels Deepest level reached (Root node is level 1)","category":"page"},{"location":"extras/","page":"Extras","title":"Extras","text":"To access these statistics you can use JuMP.backend(m) i.e.:","category":"page"},{"location":"extras/","page":"Extras","title":"Extras","text":"internal_model = JuMP.backend(m)\nprintln(\"#IntVars: \", internal_model.optimizer.model.inner.nintvars)","category":"page"},{"location":"options/#General","page":"Options","title":"General","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The most basic configuration of Juniper is:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"optimizer = Juniper.Optimizer\nnl_solver = optimizer_with_attributes(Ipopt.Optimizer, \"print_level\" => 0)","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"and then creating the model with:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"m = Model(optimizer_with_attributes(optimizer, \"nl_solver\" => nl_solver))","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"The argument nl_solver defines the solver for the relaxation here IpoptSolver. Ipopt is used for all our test cases. The Ipopt julia package is described here. The solver itself can have parameters i.e print_level=0.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"JuMP supports a lot of different NLP solvers (open source as well as commercial). A list of some NLP solvers is mentioned here","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"You can add options by adding another value pair to the list like","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"m = Model(optimizer_with_attributes(optimizer, \"nl_solver\" => nl_solver, \"branch_strategy\" => :StrongPseudoCost))","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"In this example the strategy used for branching is defined.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"In the following the options are explained. The type for the option is given after :: and the default value in [].","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"Attention: The default values might change in the future after several tests were executed to determine the best overall options.","category":"page"},{"location":"options/#Tolerance","page":"Options","title":"Tolerance","text":"","category":"section"},{"location":"options/#atol::Float64-[1e-6]","page":"Options","title":"atol::Float64 [1e-6]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"This tolerance is used to check whether a value is integer or not and is used in the feasibility pump. More information about the feasibility pump can be found here.","category":"page"},{"location":"options/#Randomness","page":"Options","title":"Randomness","text":"","category":"section"},{"location":"options/#seed::Int-[1]","page":"Options","title":"seed::Int [1]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"At some points of the search process random values are chosen i.e. for random restarts.","category":"page"},{"location":"options/#Branching","page":"Options","title":"Branching","text":"","category":"section"},{"location":"options/#branch_strategy::Symbol-[:StrongPseudoCost]","page":"Options","title":"branch_strategy::Symbol [:StrongPseudoCost]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Possible values:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":":MostInfeasible\nBranch on variables closest to 0.5\n:PseudoCost\nUse :MostInfeasible first and then Pseudo Cost Branching.\n:StrongPseudoCost\nUse Strong Branching first and then :PseudoCost\nMore options for strong branching are described here\n:Reliability\nUse Reliability Branching in a slightly different version.","category":"page"},{"location":"options/#traverse_strategy::Symbol-[:BFS]","page":"Options","title":"traverse_strategy::Symbol [:BFS]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Determines which node is used for the next branching.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"Possible values:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":":BFS\nBest-first-search: always take the node with the best bound\n:DFS\nDepth-first-search: always take the node with the highest level\nMight find a feasible solution faster\n:DBFS\nUse of DFS first until the first feasible solution is found then switch to BFS","category":"page"},{"location":"options/#Objective-Cuts","page":"Options","title":"Objective Cuts","text":"","category":"section"},{"location":"options/#incumbent_constr::Bool-[false]","page":"Options","title":"incumbent_constr::Bool [false]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Add a constraint objval >=/<= incumbent.","category":"page"},{"location":"options/#obj_epsilon::0-[Float64]","page":"Options","title":"obj_epsilon::0 [Float64]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Add a constraint of the following form at the root node if not 0.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If minimizing:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"textobj  leq (1+epsilon)textLB","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If maximizing:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"textobj  geq (1-epsilon)textUB","category":"page"},{"location":"options/#Options-for-strong-branching","page":"Options","title":"Options for strong branching","text":"","category":"section"},{"location":"options/#strong_branching_perc::Float64-[100]","page":"Options","title":"strong_branching_perc::Float64 [100]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Defines the percentage of variables to consider for strong branching. If set to 25 it means that strong branching is performed on 25% of all discrete variables. Variables which are discrete in the relaxation aren't considered again but count to the number of all discrete variables. If the number of variables is smaller than 2 it is fixed at 2 as strong branching doesn't make sense for one variable. Attention: strong_branching_time_limit might terminate strong branching earlier.","category":"page"},{"location":"options/#strong_branching_nsteps::Int64-[1]","page":"Options","title":"strong_branching_nsteps::Int64 [1]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Defines the number of steps in which strong branching is used. :PseudoCost will be used for later steps.","category":"page"},{"location":"options/#strong_branching_time_limit::Float64-[100]s","page":"Options","title":"strong_branching_time_limit::Float64 [100]s","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"For big problems with either a lot of variables or a long relaxation time it turned out to be reasonable to reduce the number of strong branching variables. Strong branching will terminate if a variable index was chosen and strong branching took longer than the time limit allowed.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If you don't want to use this time limit you can set it to Inf.","category":"page"},{"location":"options/#strong_restart::Bool-[true]","page":"Options","title":"strong_restart::Bool [true]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"If a child, while running strong branching, is infeasible this holds for the whole node. Therefore we can tighten the bounds and rerun the strong branch part. (This might occur more then once) This option is also used in reliablity branching.","category":"page"},{"location":"options/#Options-for-reliablity-branching","page":"Options","title":"Options for reliablity branching","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The implemented version of reliablity branching uses the gain score as in pseudo cost branching and if some branching variables aren't reliable in a sense that strong branching wasn't performed at least reliablility_branching_threshold times then strong branching is performed on those. Afterwards it will be branched on the variable with the highest gain score.","category":"page"},{"location":"options/#reliablility_branching_perc::Float64-[25]","page":"Options","title":"reliablility_branching_perc::Float64 [25]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Defines the percentage of variables to consider for the strong branching part of reliablity branching. If the number of variables is smaller than 2 it is fixed at 2 as strong branching doesn't make sense for one variable.","category":"page"},{"location":"options/#reliablility_branching_threshold::Int64-[5]","page":"Options","title":"reliablility_branching_threshold::Int64 [5]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Defines whether strong branching is used to improve the reliability of the gain score. If a variable was used less than reliablility_branching_threshold times for strong branching then strong branching is performed on some of those candidates. The amount of candidates used is calculated by reliablility_branching_perc.","category":"page"},{"location":"options/#strong_restart::Bool-[true]-2","page":"Options","title":"strong_restart::Bool [true]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"This option is explained in strong branching but is also used for reliability branching.","category":"page"},{"location":"options/#Options-gain-computation","page":"Options","title":"Options gain computation","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The objective gain is used for pseudo cost and therefore also for strong pseudo cost branching. mu is a parameter inside the computation of a so called score. The version we use for the score function is described here.","category":"page"},{"location":"options/#gain_mu::Float64-[0.167]","page":"Options","title":"gain_mu::Float64 [0.167]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The parameter is used and a bit described in this paper in (3).","category":"page"},{"location":"options/#Parallel","page":"Options","title":"Parallel","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Juniper can be run in parallel to speed up the algorithm. You have to start julia with julia -p P where P is the number of processors available or at least the number of processors you want to use.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"Then you have to specify the number of processor as an option.","category":"page"},{"location":"options/#processors::Int64-[1]","page":"Options","title":"processors::Int64 [1]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The number of processors used for the branch and bound part. Attention: Even if you start julia using julia -p P you still have to define the number of processors using this option.","category":"page"},{"location":"options/#Feasibility-Pump","page":"Options","title":"Feasibility Pump","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Juniper has the option to find a feasible solution before the branch and bound part starts. The following options describe how to use the feasibility pump.","category":"page"},{"location":"options/#feasibility_pump::Bool-[Auto]","page":"Options","title":"feasibility_pump::Bool [Auto]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Determines whether or not the feasibility pump should be used to get a feasible solution. The default is true if a mip solver is specified and false otherwise. Attention: If set to true you need to also set the mip_solver option.","category":"page"},{"location":"options/#mip_solver-[nothing]","page":"Options","title":"mip_solver [nothing]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"This has to be set to a mip solver if the feasibility pump should be used. A list of some MIP solvers is mentioned here.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If you want to use HiGHS you would need to use","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"using HiGHS","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"and set the option with","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"mip_solver = optimizer_with_attributes(HiGHS.Optimizer, \"output_flag\" => false)\nm = Model(optimizer_with_attributes(optimizer,\n                        \"nl_solver\" => nl_solver,\n                        \"mip_solver\" => mip_solver\n         ))","category":"page"},{"location":"options/#feasibility_pump_time_limit::Int64-[60]s","page":"Options","title":"feasibility_pump_time_limit::Int64 [60]s","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The time limit of the feasibility pump in seconds. After that time limit the branch and bound part starts whether a feasible solution was found or not.","category":"page"},{"location":"options/#feasibility_pump_tolerance_counter::Int64-[5]","page":"Options","title":"feasibility_pump_tolerance_counter::Int64 [5]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"In the feasibility pump the objective is to reduce the difference between the mip and the nlp solution. If the default tolerance atol can't be reached for feasibility_pump_tolerance_counter consecutive times but the tolerance*10 can be reached, a warning will be thrown and the tolerance is increased.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If there is no warning like Real objective wasn't solved to optimality afterwards there is no need to worry at all. Normally in the end of the feasibility pump the real objective is used to improve the objective value. In the case that the nlp was solved (maybe only locally like ipopt in non-convex cases) the warning before can be ignored as it is given that the solution has no rounding issues. In the other case a warning like Real objective wasn't solved to optimality is thrown. This means that the objective might be not the best possible given the mip solution and if a warning for the tolerance change was thrown there might be rounding issues. You can set this value to a huge number (more than 100 should be enough) if you don't want to use this option.","category":"page"},{"location":"options/#tabu_list_length::Int64-[30]","page":"Options","title":"tabu_list_length::Int64 [30]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"During the run of the feasibility pump it might happen that the alternating solve steps get into a cycle. By using a tabu list cycles can be avoided. The length determines the length of the cycle which will be avoided. If a cycle is encountered which is longer the feasibility pump terminates.","category":"page"},{"location":"options/#num_resolve_nlp_feasibility_pump::Int64-[1]","page":"Options","title":"num_resolve_nlp_feasibility_pump::Int64 [1]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"If the NLP is infeasible during the feasibility pump it can be restarted with a random starting point for the NL solver. This will be done as long as it is infeasible or num_resolve_nlp_feasibility_pump is reached.","category":"page"},{"location":"options/#User-Limits","page":"Options","title":"User Limits","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"You can stop the solver before the optimal solution is found using various options explained in this section. This is reasonable if the problem is to big to solve to (local) optimality fast. If the solver stops because of one of the following options an appropriate status like MOI.TIME_LIMIT is returned.","category":"page"},{"location":"options/#time_limit::Float64-[Inf]","page":"Options","title":"time_limit::Float64 [Inf]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The maximum time in seconds the solver should run.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If this limit is reached the status will be MOI.TIME_LIMIT.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"Note: The solver will check after each branching step therefore it isn't a strict limit and depends on the duration of a relaxation.","category":"page"},{"location":"options/#mip_gap::Float64-[0.0001]","page":"Options","title":"mip_gap::Float64 [0.0001]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Stops the solver if the gap is smaller than mip_gap. The default is 0.01%.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If this limit is reached the status will be MOI.OBJECTIVE_LIMIT.","category":"page"},{"location":"options/#best_obj_stop::Float-[NaN]","page":"Options","title":"best_obj_stop::Float [NaN]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"If an incumbent is found which is better than best_obj_stop the incumbent is returned. A warning gets thrown if best_obj_stop can't be reached.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If this limit is reached the status will be MOI.OBJECTIVE_LIMIT.","category":"page"},{"location":"options/#solution_limit::Int-[0]","page":"Options","title":"solution_limit::Int [0]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The solver stops if the requested amount of feasible solutions is found. If 0 the option gets ignored.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"If this limit is reached the status will be MOI.SOLUTION_LIMIT.","category":"page"},{"location":"options/#Resolve","page":"Options","title":"Resolve","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"Sometimes the non linear solver doesn't find a feasible solution in the first run.","category":"page"},{"location":"options/#num_resolve_root_relaxation::Int-[3]","page":"Options","title":"num_resolve_root_relaxation::Int [3]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"This especially bad if this happens for the root relaxation. If there is no optimal/local optimal solution in the root relaxation you can use this option to resolve a couple of time until a solution is found or the number of resolves exceeded this value.","category":"page"},{"location":"options/#Extra-options","page":"Options","title":"Extra options","text":"","category":"section"},{"location":"options/#allow_almost_solved_integral::Bool-[true]","page":"Options","title":"allow_almost_solved_integral::Bool [true]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"The non linear solver might return the status ALMOST_LOCALLY_SOLVED which means: \"The algorithm converged to a stationary point, local   optimal solution, or could not find directions for improvement within relaxed tolerances.\" Inside Juniper this is mostly considered as LOCALLY_SOLVED (see next option) but you can use this option to restart the search once if solution is integral but only ALMOST_LOCALLY_SOLVED to maybe find a LOCALLY_SOLVED solution.","category":"page"},{"location":"options/#allow_almost_solved::Bool-[true]","page":"Options","title":"allow_almost_solved::Bool [true]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"See above option for an explanation of ALMOST solved status codes. You can completely disable allowing such status codes with this option. Setting it to true means that all ALMOST solved status codes are considered as Infeasible/Numerical error throughout the tree search.","category":"page"},{"location":"options/#registered_functions::Union{Nothing,Vector{RegisteredFunction}}-[nothing]","page":"Options","title":"registered_functions::Union{Nothing,Vector{RegisteredFunction}} [nothing]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"If you can't define your objective function in the standard way JuMP supports to register your own function. See: JuMP User-defined functions. For Juniper v0.6.5, these registered functions were not directly visible to Juniper therefore they needed to be defined another time using this option. This is no longer required for later versions of Juniper and the keyword argument will be removed.","category":"page"},{"location":"options/#Logging","page":"Options","title":"Logging","text":"","category":"section"},{"location":"options/#log_levels::Vector{Symbol}-[[:Table,:Info,:Options]]","page":"Options","title":"log_levels::Vector{Symbol} [[:Table,:Info,:Options]]","text":"","category":"section"},{"location":"options/","page":"Options","title":"Options","text":"You can change the option log_levels to define what kind of logs you want to see.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"The output for [:Table,:Info] looks something like this:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"(Image: default-logging)","category":"page"},{"location":"options/","page":"Options","title":"Options","text":":Table","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"#ONodes\nThe number of open nodes\nCLevel\nThe current node is at level ... of the tree\nIncumbent\nBest integral solution found\nBest Bound\nThe best bound of the open nodes\nGap\nThe gap between Incumbent and Best Bound\nTime\nThe time spend since the beginning of branch and bound\nDoesn't count time before branch and bound starts (i.e. feasibility pump or root relaxation)\nGainGap\nThe difference in percentage between a guessed gain and the actual gain.\nUsed if branch_strategy = PseudoCost or after strong branching / reliability branching.","category":"page"},{"location":"options/","page":"Options","title":"Options","text":":Options","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"includes something like this before the info is printed:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"time_limit               : 10.0\nstrong_branching_nsteps  : 5","category":"page"},{"location":"options/","page":"Options","title":"Options","text":"Possible symbols which can be added to the vector are:","category":"page"},{"location":"options/","page":"Options","title":"Options","text":":Timing\nProvides some more timing information\n:AllOptions\nprints all options","category":"page"},{"location":"#Juniper","page":"Home","title":"Juniper","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Juniper (Jump Non linear Integer Program solver) is a solver for MixedIntegerNonLinearPrograms (MINLPs) written in Julia. Juniper solves these kind of problems using a NLP solver and then branch and bound. If the NLP solver isn't global optimal then Juniper is a heuristic.  You need the global optimum? Check out Alpine.jl","category":"page"},{"location":"#Why?","page":"Home","title":"Why?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You have a non linear problem with discrete variables (MINLP) and want some more control over the branch and bound part? => Use Juniper","category":"page"},{"location":"","page":"Home","title":"Home","text":"You have a really good solver for the relaxation and just want to solve problems with discrete variables as well? Just combine your solver with Juniper.","category":"page"},{"location":"#Basic-usage","page":"Home","title":"Basic usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The latest version can be installed via:","category":"page"},{"location":"","page":"Home","title":"Home","text":"] add Juniper as ] is used to get to interact with the package manager.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Then adding it to your project by","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Juniper","category":"page"},{"location":"","page":"Home","title":"Home","text":"You also have to import your NLP solver i.e.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Ipopt","category":"page"},{"location":"","page":"Home","title":"Home","text":"as well as JuMP","category":"page"},{"location":"","page":"Home","title":"Home","text":"Define Juniper as the optimizer:","category":"page"},{"location":"","page":"Home","title":"Home","text":"optimizer = Juniper.Optimizer\nnl_solver = optimizer_with_attributes(Ipopt.Optimizer, \"print_level\" => 0)","category":"page"},{"location":"","page":"Home","title":"Home","text":"And give it a go:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using LinearAlgebra # for the dot product\nm = Model(optimizer_with_attributes(optimizer, \"nl_solver\"=>nl_solver))\n\nv = [10,20,12,23,42]\nw = [12,45,12,22,21]\n@variable(m, x[1:5], Bin)\n\n@objective(m, Max, dot(v,x))\n\n@NLconstraint(m, sum(w[i]*x[i]^2 for i=1:5) <= 45)   \n\noptimize!(m)\n\n# retrieve the objective value, corresponding x values and the status\nprintln(JuMP.value.(x))\nprintln(JuMP.objective_value(m))\nprintln(JuMP.termination_status(m))","category":"page"},{"location":"","page":"Home","title":"Home","text":"This solver is a NLP solver therefore you should have at least one NLconstraint or NLobjective.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Juniper is specialized for non convex problems which get solved locally optimal. It will solve convex problems as well but specialized solvers for convex problems should be preferred then.    ","category":"page"},{"location":"#Performance","page":"Home","title":"Performance","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can find detailed performance measurements in our paper or technical report.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The most recent stats can be found on the website BnBVisual.","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Locally solved instances)","category":"page"}]
}
