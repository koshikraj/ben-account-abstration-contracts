import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TokenPaymaster, TokenPaymasterInterface } from "../TokenPaymaster";
type TokenPaymasterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenPaymaster__factory extends ContractFactory {
    constructor(...args: TokenPaymasterConstructorParams);
    deploy(accountDeployer: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TokenPaymaster>;
    getDeployTransaction(accountDeployer: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TokenPaymaster;
    connect(signer: Signer): TokenPaymaster__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620021b9380380620021b98339810160408190526200003491620003bf565b8180826200004233620000ae565b6200004d81620000fe565b5060056200005c838262000554565b5060066200006b828262000554565b5050600780546001600160a01b0319166001600160a01b03861617905550620000963060016200012a565b620000a53033600019620001f3565b50505062000647565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620001086200031b565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216620001865760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b80600460008282546200019a919062000620565b90915550506001600160a01b0382166000818152600260209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b038316620002575760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016200017d565b6001600160a01b038216620002ba5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016200017d565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000546001600160a01b03163314620003775760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200017d565b565b505050565b6001600160a01b03811681146200039457600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b8051620003ba816200037e565b919050565b600080600060608486031215620003d557600080fd5b8351620003e2816200037e565b602085810151919450906001600160401b03808211156200040257600080fd5b818701915087601f8301126200041757600080fd5b8151818111156200042c576200042c62000397565b604051601f8201601f19908116603f0116810190838211818310171562000457576200045762000397565b816040528281528a868487010111156200047057600080fd5b600093505b8284101562000494578484018601518185018701529285019262000475565b82841115620004a65760008684830101525b809750505050505050620004bd60408501620003ad565b90509250925092565b600181811c90821680620004db57607f821691505b602082108103620004fc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200037957600081815260208120601f850160051c810160208610156200052b5750805b601f850160051c820191505b818110156200054c5782815560010162000537565b505050505050565b81516001600160401b0381111562000570576200057062000397565b6200058881620005818454620004c6565b8462000502565b602080601f831160018114620005c05760008415620005a75750858301515b600019600386901b1c1916600185901b1785556200054c565b600085815260208120601f198616915b82811015620005f157888601518255948401946001909101908401620005d0565b5085821015620006105787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082198211156200064257634e487b7160e01b600052601160045260246000fd5b500190565b611b6280620006576000396000f3fe6080604052600436106101ac5760003560e01c80638da5cb5b116100ec578063c23a5cea1161008a578063dd62ed3e11610064578063dd62ed3e146104bb578063f0dda65c1461050e578063f2fde38b1461052e578063f465c77e1461054e57600080fd5b8063c23a5cea1461047e578063c399ec881461049e578063d0e30db0146104b357600080fd5b8063a9059cbb116100c6578063a9059cbb146103fc578063a9a234091461041c578063b0d691fe1461043c578063bb9fe6bf1461046957600080fd5b80638da5cb5b1461039c57806395d89b41146103c7578063a457c2d7146103dc57600080fd5b8063313ce5671161015957806370a082311161013357806370a08231146102dc57806371481d321461031f578063715018a614610371578063796d43711461038657600080fd5b8063313ce56714610280578063395093511461029c578063584465f2146102bc57600080fd5b806318160ddd1161018a57806318160ddd14610221578063205c28781461024057806323b872dd1461026057600080fd5b80630396cb60146101b157806306fdde03146101c6578063095ea7b3146101f1575b600080fd5b6101c46101bf3660046116d3565b61057c565b005b3480156101d257600080fd5b506101db610612565b6040516101e8919061176b565b60405180910390f35b3480156101fd57600080fd5b5061021161020c3660046117a0565b6106a4565b60405190151581526020016101e8565b34801561022d57600080fd5b506004545b6040519081526020016101e8565b34801561024c57600080fd5b506101c461025b3660046117a0565b6106bc565b34801561026c57600080fd5b5061021161027b3660046117cc565b610738565b34801561028c57600080fd5b50604051601281526020016101e8565b3480156102a857600080fd5b506102116102b73660046117a0565b61075c565b3480156102c857600080fd5b506101c46102d736600461180d565b6107a8565b3480156102e857600080fd5b506102326102f736600461180d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b34801561032b57600080fd5b5060075461034c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e8565b34801561037d57600080fd5b506101c46107f7565b34801561039257600080fd5b50610232613a9881565b3480156103a857600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff1661034c565b3480156103d357600080fd5b506101db61080b565b3480156103e857600080fd5b506102116103f73660046117a0565b61081a565b34801561040857600080fd5b506102116104173660046117a0565b6108f0565b34801561042857600080fd5b506101c461043736600461182a565b6108fe565b34801561044857600080fd5b5060015461034c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561047557600080fd5b506101c4610918565b34801561048a57600080fd5b506101c461049936600461180d565b61099e565b3480156104aa57600080fd5b50610232610a2e565b6101c4610ac6565b3480156104c757600080fd5b506102326104d63660046118b9565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b34801561051a57600080fd5b506101c46105293660046117a0565b610b32565b34801561053a57600080fd5b506101c461054936600461180d565b610b48565b34801561055a57600080fd5b5061056e6105693660046118f2565b610bb1565b6040516101e8929190611946565b610584610dfa565b6001546040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff8316600482015273ffffffffffffffffffffffffffffffffffffffff90911690630396cb609034906024016000604051808303818588803b1580156105f657600080fd5b505af115801561060a573d6000803e3d6000fd5b505050505050565b60606005805461062190611968565b80601f016020809104026020016040519081016040528092919081815260200182805461064d90611968565b801561069a5780601f1061066f5761010080835404028352916020019161069a565b820191906000526020600020905b81548152906001019060200180831161067d57829003601f168201915b5050505050905090565b6000336106b2818585610e7b565b5060019392505050565b6106c4610dfa565b6001546040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063205c287890604401600060405180830381600087803b1580156105f657600080fd5b60003361074685828561102e565b6107518585856110ff565b506001949350505050565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906106b290829086906107a39087906119bb565b610e7b565b6107b0610dfa565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6107ff610dfa565b6108096000611375565b565b60606006805461062190611968565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156108e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6107518286868403610e7b565b6000336106b28185856110ff565b6109066113ea565b6109128484848461140e565b50505050565b610920610dfa565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561098a57600080fd5b505af1158015610912573d6000803e3d6000fd5b6109a6610dfa565b6001546040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063c23a5cea90602401600060405180830381600087803b158015610a1357600080fd5b505af1158015610a27573d6000803e3d6000fd5b5050505050565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac191906119fa565b905090565b6001546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99034906024016000604051808303818588803b158015610a1357600080fd5b610b3a610dfa565b610b448282611441565b5050565b610b50610dfa565b610b7a30610b7360005473ffffffffffffffffffffffffffffffffffffffff1690565b6000610e7b565b610b8381611536565b610bae30827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e7b565b50565b6060600080610bbf846115ea565b9050613a988660a0013511610c56576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f546f6b656e5061796d61737465723a2067617320746f6f206c6f7720666f722060448201527f706f73744f70000000000000000000000000000000000000000000000000000060648201526084016108da565b610c636040870187611a13565b159050610d1757610c73866115fd565b80610c846102f7602089018961180d565b1015610d12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f546f6b656e5061796d61737465723a206e6f2062616c616e636520287072652d60448201527f637265617465290000000000000000000000000000000000000000000000000060648201526084016108da565b610d90565b80610d286102f7602089018961180d565b1015610d90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f546f6b656e5061796d61737465723a206e6f2062616c616e636500000000000060448201526064016108da565b610d9d602087018761180d565b6040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529660009650945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108da565b73ffffffffffffffffffffffffffffffffffffffff8316610f1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff8216610fc0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600360209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461091257818110156110f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016108da565b6109128484848403610e7b565b73ffffffffffffffffffffffffffffffffffffffff83166111a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff8216611245576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902054818110156112fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016108da565b73ffffffffffffffffffffffffffffffffffffffff80851660008181526002602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906113689086815260200190565b60405180910390a3610912565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461080957600080fd5b600061141c8385018561180d565b9050600061143461142f613a98856119bb565b6115ea565b905061060a8230836110ff565b73ffffffffffffffffffffffffffffffffffffffff82166114be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016108da565b80600460008282546114d091906119bb565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000818152600260209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b61153e610dfa565b73ffffffffffffffffffffffffffffffffffffffff81166115e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016108da565b610bae81611375565b60006115f7606483611a7f565b92915050565b600061160c6040830183611a13565b61161b91601491600091611aba565b61162491611ae4565b60075460609190911c915073ffffffffffffffffffffffffffffffffffffffff168114610b44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f546f6b656e5061796d61737465723a2077726f6e67206163636f756e7420646560448201527f706c6f796572000000000000000000000000000000000000000000000000000060648201526084016108da565b6000602082840312156116e557600080fd5b813563ffffffff811681146116f957600080fd5b9392505050565b6000815180845260005b818110156117265760208185018101518683018201520161170a565b81811115611738576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006116f96020830184611700565b73ffffffffffffffffffffffffffffffffffffffff81168114610bae57600080fd5b600080604083850312156117b357600080fd5b82356117be8161177e565b946020939093013593505050565b6000806000606084860312156117e157600080fd5b83356117ec8161177e565b925060208401356117fc8161177e565b929592945050506040919091013590565b60006020828403121561181f57600080fd5b81356116f98161177e565b6000806000806060858703121561184057600080fd5b84356003811061184f57600080fd5b9350602085013567ffffffffffffffff8082111561186c57600080fd5b818701915087601f83011261188057600080fd5b81358181111561188f57600080fd5b8860208285010111156118a157600080fd5b95986020929092019750949560400135945092505050565b600080604083850312156118cc57600080fd5b82356118d78161177e565b915060208301356118e78161177e565b809150509250929050565b60008060006060848603121561190757600080fd5b833567ffffffffffffffff81111561191e57600080fd5b8401610160818703121561193157600080fd5b95602085013595506040909401359392505050565b6040815260006119596040830185611700565b90508260208301529392505050565b600181811c9082168061197c57607f821691505b6020821081036119b5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600082198211156119f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b600060208284031215611a0c57600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a4857600080fd5b83018035915067ffffffffffffffff821115611a6357600080fd5b602001915036819003821315611a7857600080fd5b9250929050565b600082611ab5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008085851115611aca57600080fd5b83861115611ad757600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611b245780818660140360031b1b83161692505b50509291505056fea264697066735822122045794c6da1cc838b01be2866df94f17cce5cce65bfeed68cd93703b3db7ccd8764736f6c634300080f0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TokenPaymasterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenPaymaster;
}
export {};
