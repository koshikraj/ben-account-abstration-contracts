/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SimpleAccountDeployer,
  SimpleAccountDeployerInterface,
} from "../SimpleAccountDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "deployAccount",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611659806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806308a6354e1461003b5780633bf2c3e714610077575b600080fd5b61004e610049366004610258565b61008a565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004e610085366004610258565b61015d565b60006101538260001b604051806020016100a390610226565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081815273ffffffffffffffffffffffffffffffffffffffff8981166020840152881690820152606001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261013892916020016102d4565b604051602081830303815290604052805190602001206101f4565b90505b9392505050565b60008061016b85858561008a565b905073ffffffffffffffffffffffffffffffffffffffff81163b801561019357509050610156565b8360001b86866040516101a590610226565b73ffffffffffffffffffffffffffffffffffffffff9283168152911660208201526040018190604051809103906000f59050801580156101e9573d6000803e3d6000fd5b509695505050505050565b60006101568383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b61133a806102ea83390190565b73ffffffffffffffffffffffffffffffffffffffff8116811461025557600080fd5b50565b60008060006060848603121561026d57600080fd5b833561027881610233565b9250602084013561028881610233565b929592945050506040919091013590565b6000815160005b818110156102ba57602081850181015186830152016102a0565b818111156102c9576000828601525b509290920192915050565b60006101536102e38386610299565b8461029956fe608060405234801561001057600080fd5b5060405161133a38038061133a83398101604081905261002f9161008f565b600180546001600160a01b039384166001600160a01b031990911617905560008054919092166c01000000000000000000000000026001600160601b039091161790556100c9565b6001600160a01b038116811461008c57600080fd5b50565b600080604083850312156100a257600080fd5b82516100ad81610077565b60208401519092506100be81610077565b809150509250929050565b611262806100d86000396000f3fe6080604052600436106100cb5760003560e01c80638da5cb5b11610074578063b0d691fe1161004e578063b0d691fe14610239578063c399ec8814610264578063d0cb75fa1461027957600080fd5b80638da5cb5b14610194578063a9059cbb146101f6578063affed0e01461021657600080fd5b80634a58db19116100a55780634a58db191461014c5780634d44560d1461015457806380c5c7d01461017457600080fd5b80630565bb67146100d75780630825d1fc146100f95780631b71bb6e1461012c57600080fd5b366100d257005b600080fd5b3480156100e357600080fd5b506100f76100f2366004610e92565b610299565b005b34801561010557600080fd5b50610119610114366004610f1b565b6102e8565b6040519081526020015b60405180910390f35b34801561013857600080fd5b506100f7610147366004610f82565b61032f565b6100f7610343565b34801561016057600080fd5b506100f761016f366004610fa6565b6103ce565b34801561018057600080fd5b506100f761018f366004610e92565b61047d565b3480156101a057600080fd5b506000546101d1906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610123565b34801561020257600080fd5b506100f7610211366004610fa6565b610485565b34801561022257600080fd5b506000546bffffffffffffffffffffffff16610119565b34801561024557600080fd5b5060015473ffffffffffffffffffffffffffffffffffffffff166101d1565b34801561027057600080fd5b506101196104d5565b34801561028557600080fd5b506100f7610294366004611017565b61058b565b6102a16106af565b6102e2848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061074c92505050565b50505050565b60006102f26107c9565b6102fd85858561084a565b905061030c6040860186611083565b905060000361031e5761031e8561099c565b61032782610a64565b949350505050565b610337610acf565b61034081610ad7565b50565b600061036460015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163460405160006040518083038185875af1925050503d80600081146103bb576040519150601f19603f3d011682016040523d82523d6000602084013e6103c0565b606091505b505090508061034057600080fd5b6103d66106af565b60015473ffffffffffffffffffffffffffffffffffffffff166040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561046157600080fd5b505af1158015610475573d6000803e3d6000fd5b505050505050565b6102a16107c9565b61048d6106af565b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f193505050501580156104d0573d6000803e3d6000fd5b505050565b60006104f660015473ffffffffffffffffffffffffffffffffffffffff1690565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610562573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058691906110e8565b905090565b6105936106af565b828114610601576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156106a85761069685858381811061062157610621611101565b90506020020160208101906106369190610f82565b600085858581811061064a5761064a611101565b905060200281019061065c9190611083565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061074c92505050565b806106a08161115f565b915050610604565b5050505050565b6000546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff163314806106e457503330145b61074a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016105f8565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516107759190611197565b60006040518083038185875af1925050503d80600081146107b2576040519150601f19603f3d011682016040523d82523d6000602084013e6107b7565b606091505b5091509150816106a857805160208201fd5b60015473ffffffffffffffffffffffffffffffffffffffff16331461074a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016105f8565b6000806108a4846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90506108f46108b7610140870187611083565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508593925050610b659050565b6000546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff9081169116148061092b575032155b610991576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6163636f756e743a2077726f6e67207369676e6174757265000000000000000060448201526064016105f8565b506000949350505050565b600080546020830135916bffffffffffffffffffffffff90911690806109c1836111d2565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e63650000000000000000000060448201526064016105f8565b80156103405760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d80600081146106a8576040519150601f19603f3d011682016040523d82523d6000602084013e6106a8565b61074a6106af565b60015460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000610b748585610b89565b91509150610b8181610bce565b509392505050565b6000808251604103610bbf5760208301516040840151606085015160001a610bb387828585610d81565b94509450505050610bc7565b506000905060025b9250929050565b6000816004811115610be257610be26111fd565b03610bea5750565b6001816004811115610bfe57610bfe6111fd565b03610c65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105f8565b6002816004811115610c7957610c796111fd565b03610ce0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105f8565b6003816004811115610cf457610cf46111fd565b03610340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016105f8565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610db85750600090506003610e67565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610e0c573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116610e6057600060019250925050610e67565b9150600090505b94509492505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461034057600080fd5b60008060008060608587031215610ea857600080fd5b8435610eb381610e70565b935060208501359250604085013567ffffffffffffffff80821115610ed757600080fd5b818701915087601f830112610eeb57600080fd5b813581811115610efa57600080fd5b886020828501011115610f0c57600080fd5b95989497505060200194505050565b60008060008060808587031215610f3157600080fd5b843567ffffffffffffffff811115610f4857600080fd5b85016101608188031215610f5b57600080fd5b9350602085013592506040850135610f7281610e70565b9396929550929360600135925050565b600060208284031215610f9457600080fd5b8135610f9f81610e70565b9392505050565b60008060408385031215610fb957600080fd5b8235610fc481610e70565b946020939093013593505050565b60008083601f840112610fe457600080fd5b50813567ffffffffffffffff811115610ffc57600080fd5b6020830191508360208260051b8501011115610bc757600080fd5b6000806000806040858703121561102d57600080fd5b843567ffffffffffffffff8082111561104557600080fd5b61105188838901610fd2565b9096509450602087013591508082111561106a57600080fd5b5061107787828801610fd2565b95989497509550505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126110b857600080fd5b83018035915067ffffffffffffffff8211156110d357600080fd5b602001915036819003821315610bc757600080fd5b6000602082840312156110fa57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361119057611190611130565b5060010190565b6000825160005b818110156111b8576020818601810151858301520161119e565b818111156111c7576000828501525b509190910192915050565b60006bffffffffffffffffffffffff8083168181036111f3576111f3611130565b6001019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea264697066735822122002b6f3af8d7f23725443d9be640fb9a50e8800227abb7fec50364d5034b2ec9964736f6c634300080f0033a26469706673582212201954079c5d345643ac50871d4d4afc001a2f1ac8e675ef43b1b9716d3297964664736f6c634300080f0033";

type SimpleAccountDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountDeployer__factory extends ContractFactory {
  constructor(...args: SimpleAccountDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccountDeployer> {
    return super.deploy(overrides || {}) as Promise<SimpleAccountDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimpleAccountDeployer {
    return super.attach(address) as SimpleAccountDeployer;
  }
  override connect(signer: Signer): SimpleAccountDeployer__factory {
    return super.connect(signer) as SimpleAccountDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountDeployerInterface {
    return new utils.Interface(_abi) as SimpleAccountDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountDeployer;
  }
}